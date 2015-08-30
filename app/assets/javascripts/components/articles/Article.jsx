// var mui = require('material-ui')

var Article = React.createClass({
  render: function() {
    return (
      <li>
        <div className="collapsible-header"><a href="#">{this.props.data.short_title}</a></div>
        <div className="collapsible-body"><p>{this.props.children}</p></div>
      </li>
    )
  }
});
  // <ul class="collapsible" data-collapsible="accordion">
  //   <li>
  //     <div class="collapsible-header"><i class="material-icons">filter_drama</i>First</div>
  //     <div class="collapsible-body"><p>Lorem ipsum dolor sit amet.</p></div>
  //   </li>
  //   <li>
  //     <div class="collapsible-header"><i class="material-icons">place</i>Second</div>
  //     <div class="collapsible-body"><p>Lorem ipsum dolor sit amet.</p></div>
  //   </li>
  //   <li>
  //     <div class="collapsible-header"><i class="material-icons">whatshot</i>Third</div>
  //     <div class="collapsible-body"><p>Lorem ipsum dolor sit amet.</p></div>
  //   </li>
  // </ul>
