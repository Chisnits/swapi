import { SwapiService } from './service';

class SwapiComponent extends HTMLElement {
    async connectedCallback() {
        const _swapiService = new SwapiService();
        const response = await _swapiService.getPeople();
        response.map(person => {
        this.innerHTML +=
        `<p>Name: ${person.name} <br>
        Birth Year: ${person.birth_year}<br>
        Date Created: ${person.created}<br>
        Last Edited: ${person.edited}<br>
        Eye Color: ${person.eye_color}<br>
        Gender: ${person.gender}<br>
        Hair Color: ${person.hair_color}<br>
        Height: ${person.height}<br>
        Homeworld: ${person.homeworld}<br>
        Mass: ${person.mass}<br>
        Skin Color: ${person.skin_color}<br></p>`;
          })
    }
}
  customElements.define("swapi-component", SwapiComponent);