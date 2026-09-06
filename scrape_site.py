# -*- coding: utf-8 -*-
"""
سكربت زحف بسيط على موقع RedStar Travel، بيحفظ نصوص كل صفحة في knowledge_base.json
شغّله يدوياً بعد أي تحديث على الموقع، أو حطه في Windows Task Scheduler ليشتغل كل يوم مثلاً.

المتطلبات: pip install requests beautifulsoup4 lxml
"""
import requests
from bs4 import BeautifulSoup
from urllib.parse import urljoin
import json
import re

BASE_URL = "https://redstar-travel.com"
START_URL = BASE_URL + "/index.html"
OUTPUT_FILE = "knowledge_base.json"

VISITED = set()
PAGES = {}


def clean_text(html: str) -> str:
    soup = BeautifulSoup(html, "html.parser")
    for tag in soup(["script", "style", "noscript", "svg"]):
        tag.decompose()
    text = soup.get_text(separator=" ")
    text = re.sub(r"\s+", " ", text).strip()
    return text


def crawl(url: str):
    if url in VISITED or not url.startswith(BASE_URL):
        return
    VISITED.add(url)

    try:
        resp = requests.get(url, timeout=15)
        content_type = resp.headers.get("Content-Type", "")
        if resp.status_code != 200 or "text/html" not in content_type:
            return
    except Exception as e:
        print(f"⚠️ تعذر تحميل {url}: {e}")
        return

    text = clean_text(resp.text)
    if len(text) > 30:  # تجاهل الصفحات الفارغة تقريباً
        PAGES[url] = text
        print(f"✅ {url}  ({len(text)} حرف)")

    soup = BeautifulSoup(resp.text, "html.parser")
    for a in soup.find_all("a", href=True):
        link = urljoin(url, a["href"]).split("#")[0]
        if link.startswith(BASE_URL) and link not in VISITED:
            crawl(link)


if __name__ == "__main__":
    print("🔎 بدء الزحف على الموقع...")
    crawl(START_URL)

    with open(OUTPUT_FILE, "w", encoding="utf-8") as f:
        json.dump(PAGES, f, ensure_ascii=False, indent=2)

    print(f"\n📦 تم حفظ {len(PAGES)} صفحة في {OUTPUT_FILE}")
    print("شغّل هذا السكربت من نفس المجلد اللي فيه bot_server.py بعد أي تحديث على الموقع.")
