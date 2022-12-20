import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="sender"
export default class extends Controller {
  static targets = ["input"]
  static outlets = ["receiver"]

  sendMessage() {
    for (const outlet of this.receiverOutlets) {
      outlet.push(this.inputTarget.value)
    }
    this.inputTarget.value = ""
  }
}
