import { onRequestGet as __api_health_js_onRequestGet } from "C:\\Users\\azzoo\\Downloads\\redstar-travel-bilingual\\functions\\api\\health.js"
import { onRequestPost as __api_visa_orders_js_onRequestPost } from "C:\\Users\\azzoo\\Downloads\\redstar-travel-bilingual\\functions\\api\\visa-orders.js"

export const routes = [
    {
      routePath: "/api/health",
      mountPath: "/api",
      method: "GET",
      middlewares: [],
      modules: [__api_health_js_onRequestGet],
    },
  {
      routePath: "/api/visa-orders",
      mountPath: "/api",
      method: "POST",
      middlewares: [],
      modules: [__api_visa_orders_js_onRequestPost],
    },
  ]