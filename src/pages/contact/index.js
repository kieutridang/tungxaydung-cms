import React from "react";
import { navigate } from "gatsby-link";
import Layout from "../../components/Layout";

function encode(data) {
  return Object.keys(data)
    .map((key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");
}

export default class Index extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isValidated: false };
  }

  render() {
    return (
      <Layout>
        <section className="section">
          <div className="container">
            <div className="content">
              <h1>Địa chỉ: 039 Lô N, Chung cư Ngô Gia Tự, P2, Q10</h1>
              <div
                dangerouslySetInnerHTML={{
                  __html:
                    ' <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.6315860478753!2d106.67086816524717!3d10.762850492330733!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752ee16285c239%3A0xab3b06b0e9ec6e36!2zQ2h1bmcgY8awIE5nw7QgR2lhIFThu7E!5e0!3m2!1sen!2s!4v1592049133502!5m2!1sen!2s" width="600" height="450" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>',
                }}
              />
              <h1>
                Số điện thoại:
                <a target="_blank" href="tel:0906646035">
                  0906646035
                </a>
              </h1>
              <h1>
                Email:{" "}
                <a target="_blank" href="mailto:tungxaydung.1210@gmail.com">
                  tungxaydung.1210@gmail.com
                </a>
              </h1>
            </div>
          </div>
        </section>
      </Layout>
    );
  }
}
