import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="receiver"
export default class extends Controller {
  static targets = ["messages"]

  push(message) {
    const p = document.createElement("p")

    p.append(message)
    this.messagesTarget.append(p)
  }
}
