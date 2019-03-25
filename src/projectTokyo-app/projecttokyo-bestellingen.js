import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';
import '@polymer/paper-button/paper-button.js';
import '@polymer/neon-animation/animations/scale-up-animation.js';
import '@polymer/neon-animation/animations/fade-out-animation.js';
import '@polymer/paper-dialog/paper-dialog.js';

/**
 * @customElement
 * @polymer
 */
class ProjectTokyoBestellingen extends PolymerElement {
  static get template() {
    return html`
      <style>
        :host {
          display: block;
        }

        body {
          height: 100%;
          width: 100%;
          margin: 0;
          padding: 0;
          height: 100%;
          widt: 100%;
          background-color: #4e5556;
        }

        .header {
          font-size:1.8vw;
          overflow: hidden;
          background-color: #4e5556;
          background-size: cover;
          padding: 20px 10px;
          border-style: solid;
          border-color: #3f90a3;
          border-width: 7px;
          position: relative;
          font-family: arial;
        }

        .header a {
          float: left;
          background-color: #ffffff;
          opacity: 0.7;
          color: black;
          text-align: center;
          padding: 12px;
          text-decoration: none;
          font-size: 18px;
          line-height: 25px;
        }

        .header a:hover {
          background-color: #3f90a3;
          border-style: solid;
          border-width: 0;
          color: white;
        }

        .header a.active {
          background-color: #3f90a3;
          color: #ffffff;
        }

        .header-right {
          float: right;
          text-align: center;
        }

        .header-left {
          float: left;
          position: absolute;
        }

        .column {
          float: left;
          width: 100%;
          height: 25%;
          table-layout: fixed;
          margin: 20px 0;
          font-family: arial;
        }

        .column ul {
          margin: 0;
          padding: 0;
        }

        .column ul li {
          display: inline;
          float: left;
          width: 22.2%;
          margin-left: 2%;
          background-color: #dcdcdc;
          min-height: 200px;
          border: 3px solid #3f90a3;
          box-shadow: 5px 10px 10px #dcdcdc;
        }

        .row:after {
          content: "";
          display: table;
          clear: both;
        }

        th {
          padding-bottom: 20px;
        }

        table tr th:nth-child(1),
        table tr td:nth-child(1) {
          min-width: 80px;
          border: 2px solid #3f90a3;
        }

        table tr th:nth-child(2),
        table tr td:nth-child(2) {
          text-align: center;
          border: 2px solid #3f90a3;
        }

        table {
          width: 100%;
        }

        li {
          margin: 15px 0;
        }

        .bottom-right {
          margin: 20px 20px;
          position: absolute;
          right: 0;
          bottom: 0;
          color: #a00000;
          font-family: arial;
        }


      </style>
      <div class="header">
        <div class="header-left">
          <a href="">Home</a>
          <a class="active" href="bestellingen.html">Bestellingen</a>
        </div>
        <div class="header-right">
          <a href="contact.html">Help</a>
          <a href="about.html">Contact</a>
        </div>
      </div>

      <div class="column">
        <ul>
          <li>
            <table>
              <tr>
                <th>Gerecht</th>
                <th>aantal</th>
              </tr>
              <tr>
                <td>63. California rolls</td>
                <td>5</td>
              </tr>
            </table>
          </li>
          <li>
            <table>
              <tr>
                <th>Gerecht</th>
                <th>aantal</th>
              </tr>
              <tr>
                <td>69. gerecht</td>
                <td>3</td>
              </tr>
            </table>
          </li>
          <li>
            <table>
              <tr>
                <th>Gerecht</th>
                <th>aantal</th>
              </tr>
              <tr>
                <td>63. California rolls</td>
                <td>5</td>
              </tr>
            </table>
          </li>
          <li>
            <table>
              <tr>
                <th>Gerecht</th>
                <th>aantal</th>
              </tr>
              <tr>
                <td>63. California rolls</td>
                <td>5</td>
              </tr>
            </table>
          </li>
          <li>
            <table>
              <tr>
                <th>Gerecht</th>
                <th>aantal</th>
              </tr>
              <tr>
                <td>63. California rolls</td>
                <td>5</td>
              </tr>
              <tr>
                <td>23. Friet</td>
                <td>1</td>
              </tr>
              <tr>
                <td>38. Hondenvlees</td>
                <td>6</td>
              </tr>
            </table>
          </li>
        </ul>
      </div>

      <paper-dialog id="modal" modal>
        <div class="column">
          <h2>Selectie serveren?</h2>
          <paper-button dialog-dismiss>Cancel</paper-button>
          <paper-button dialog-confirm autofocus>Accept</paper-button>
        </div>
      </paper-dialog>

      <div class="bottom-right">
        <paper-button raised class="indigo">In bereiding</paper-button>
        <paper-button on-click="widgetClicked" raised class="indigo">Serveren</paper-button>
      </div>


    `;
  }

  widgetClicked() {
    this.$.modal.open();
    this.iconType = this.iconType === 'help' ? 'feedback' : 'help';
  }

  static get properties() {
    return {
      prop1: {
        type: String,
        value: 'projecttokyo-bestellingen'
      }
    };
  }
}

window.customElements.define('projecttokyo-bestellingen', ProjectTokyoBestellingen);
