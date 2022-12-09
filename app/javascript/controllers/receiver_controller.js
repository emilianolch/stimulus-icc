import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="receiver"
export default class extends Controller {
  static targets = ["messages"]

  getMessage(event) {
    const p = document.createElement("p")

    p.append(event.detail.message)
    this.messagesTarget.append(p)
  }
}
