var Modal = React.createClass({
  render: function() {
    return (
      <div>
      <a className="modal-trigger waves-effect waves-light btn" href="#modal1">Modal</a>
      <button data-target="modal1" class="btn modal-trigger">Modal</button>

      <div id="modal1" className="modal modal-fixed-footer">
        <div className="modal-content">
          <h4>Modal Header</h4>
          <p>A bunch of text</p>
        </div>
        <div className="modal-footer">
          <a href="#!" className="modal-action modal-close waves-effect waves-green btn-flat">Agree</a>
        </div>
      </div>
      </div>
    )
  }

})
