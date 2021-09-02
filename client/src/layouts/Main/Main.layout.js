import React from "react";
import { AdderNewObject } from "../../components";
import { Footer } from "../Footer/Footer.layout";
import { Header } from "../Header/Header.layout";

export const Main = () => {
  return (
    <>
      <Header />
      <main className="main-section">
        <section className="table-section container">
          <div className="row">
            <div className="col s12">
            {/* {{#if visible}} */}
              <table className="responsive-table">
                <thead>
                  <tr>
                      <th>Number</th>
                      <th>Square, m<sup>2</sup></th>
                      <th>Status</th>
                      <th></th>
                  </tr>
                </thead>

                <tbody id="table-body">


                {/* {{#each objects}}
                  <tr data-row="{{this.id}}">
                    <td>{{this.number}}</td>
                    <td>{{this.square}}</td>
                    <td>{{this.status}}</td>
                    <td className="table-section__buttons-cell">
                      <button className="waves-effect waves-light btn" data-object="edit" data-id="{{this.id}}">
                        <i className="material-icons">edit</i>
                      </button>
                      <button className="waves-effect waves-light btn" data-object="delete" data-id="{{this.id}}">
                        <i className="material-icons">delete</i>
                      </button>
                    </td>
                  </tr>
                {{/each}} */}

                </tbody>
              </table>
            {/* {{else}} */}
              <p> Нет данных</p>
            {/* {{/if}} */}
            </div>
          </div>
        </section>
      </main>
      <AdderNewObject />
      <Footer />
    </>
  );
}