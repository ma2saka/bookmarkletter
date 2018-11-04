import app from "./app"

if (!window.__app) {
  window.__app = true;
  const content = document.createElement("div")
  document.body.appendChild(content)
  const remover = () => {
    window.__app = false
    content.remove()
  }
  app(content, remover)
} else {
  console.log("app is already executed.")
}
