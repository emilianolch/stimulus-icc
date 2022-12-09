import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="sender"
export default class extends Controller {
  static targets = ["input"]

  sendMessage() {
    const event = new CustomEvent("stimulus-icc:message", {
      detail: {
        message: this.inputTarget.value,
      },
    })

    document.dispatchEvent(event)
    this.inputTarget.value = ""
  }
}
