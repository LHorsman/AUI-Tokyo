import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';
import '/node_modules/@polymer/polymer/lib/elements/dom-repeat.js';
import '/node_modules/@polymer/paper-button/paper-button.js';
import '/node_modules/@polymer/paper-input/paper-input.js';
import '/node_modules/@polymer/app-storage/app-localstorage/app-localstorage-document.js';
import '/node_modules/@polymer/paper-dialog/paper-dialog.js';
import {AppStorageBehavior} from '@polymer/app-storage/app-storage-behavior.js';
import {mixinBehaviors} from '@polymer/polymer/lib/legacy/class.js';


/**
 * @customElement
 * @polymer
 */
class ProjectTokyoApp extends PolymerElement {
  static get template() {
    return html `
      <style>
        :host {
          display: block;
        }

        .dishes-container {
          width:calc(1000px - (10px * 2));
          margin:0 auto;
        }

        .dish-container {
          box-shadow:0 2px 2px #cfcac4;
          border-radius:3px;
          padding:10px;
          display:flex;
          margin-top:10px;
          background-color:#fff;
          border:1px #bab5b0 solid;
        }

        .dish-information-container {
          margin-left:15px;
          display:flex;
          flex-direction:column;
        }

        .dish-order-container {
            margin-left:auto;
            display:flex;
            align-items:center;
        }

        .dish-image {
          height:100px;
        }

        .dishamount {
          width: 100px;
          margin-right:45px;
        }

        .test {
          border:solid black 1px;
        }

        .button-container {

        }
      </style>
      <paper-dialog id="modal" modal>
      <h2>Wilt u de bestelling plaatsen?</h2>
      <div>
      <dom-repeat items="[[sessionOrder]]">
          <template>
          <p class="">[[item.dishname]]</p>
          <p class="">[[item.dishnumber]]</p>
          </template>
      </dom-repeat>
      </div>
      <div class="buttons">
        <paper-button dialog-dismiss>Annuleren</paper-button>
        <paper-button dialog-confirm on-click="save" autofocus>Bestellen</paper-button>
      </div>
      </paper-dialog>


      <div class="dishes-container">
        <dom-repeat items="[[dishes]]">
            <template>
              <div class="dish-container ">
                <img class="dish-image" src="[[item.imagePath]]">
                <div class="dish-information-container ">
                  <p class="">[[item.dishname]]</p>
                  <p class="">[[item.dishnumber]]</p>
                </div>
                <div class="dish-order-container ">
                  <paper-input dish-group="[[item.dishnumber]]" id="input-[[item.dishnumber]]" class="dishamount" label="hoeveelheid" type="number" value="{{item.dishamount}}"></paper-input>
                  <!-- <paper-button dish-group="[[item.dishnumber]]" id="[[item.dishnumber]]" raised on-click="save">Bestel</paper-button> -->
                </div>
              </div>
            </template>
        </dom-repeat>
          <div class="button-container"><paper-button raised on-click="popUp">Bestel</paper-button></div>
      </div>

      <app-localstorage-document key="save" data="{{toSend}}"></app-localstorage-document>
    `;
  }

  save(e) {
    let dishes = this.dishes.filter((value) => {
      return value.dishamount > 0;
    });

    let date = new Date();
    let orderDate = date.getHours() + ":" + date.getMinutes();

    this.push("toSend", {"orderID": this.toSend.length +1, "orderItems": dishes, "orderDate": orderDate})
  }

  beforeSend(){
    this.sessionOrder = this.dishes.filter((value) => {
      return value.dishamount > 0;
    });
  }


  static get properties() {
    return {
      dishes: {
        type: Array,
        value: [
          {imagePath: "/images/okonomiyaki.jpg", dishname: "Okonomiyaki", dishnumber: "1", dishamount: 0},
          {imagePath: "/images/oyakodon.jpg", dishname: "Oyakodon", dishnumber: "2", dishamount: 0},
          {imagePath: "/images/pittigevegetarischeramen.jpg", dishname: "Pittige vegetarische ramen", dishnumber: "3", dishamount: 0},
          {imagePath: "/images/salmonsushi.jpg", dishname: "Salmon sushi", dishnumber: "4", dishamount: 0},
          {imagePath: "/images/tokoyaki.jpg", dishname: "Tokoyaki", dishnumber: "5", dishamount: 0}
        ]
      },

      toSend: {
        type: Array,
        value: []
      },

      sessionOrder:{
        type: Array,
        value: []
      },

      string1: {
        type: String,
        value: 'some String'
      }
    };


  }


  popUp() {
    this.beforeSend();
    console.log('popup clicked');
    this.$.modal.open();
    this.iconType = this.iconType === 'help' ? 'feedback' : 'help';
  }
}

window.customElements.define('projecttokyo-app', ProjectTokyoApp);
