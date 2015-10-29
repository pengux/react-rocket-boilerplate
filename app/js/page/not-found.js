import React from 'react';
import DocumentTitle from 'react-document-title';

export default React.createClass({

  propTypes: {
    currentUser: React.PropTypes.object.isRequired
  },

  render() {
    return (
      <DocumentTitle title="404: Not Found">
        <section className="not-found-page">
          Page Not Found
        </section>
      </DocumentTitle>
    );
  }

});
