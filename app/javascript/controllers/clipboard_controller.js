import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="clipboard"
export default class extends Controller {
  static targets = [ "source" ]

  copy(event) {
    event.preventDefault();
    this.sourceTarget.select();
    // navigator.clipboard.writeText(this.sourceTarget.value);
    document.execCommand("copy");
  }

}
