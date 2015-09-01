var List = React.createClass({
  buildMembers: function(memberList) {
    var memberNodes = memberList.map(this.buildMember)
    return memberNodes;
  },

  buildMember: function(member) {
    return <Member data={member} />
  },

  render: function() {
    var memberNodes = this.buildMembers(this.props.data)
    return (
      <div className="member-list">
        {memberNodes}
      </div>
    );
  }
});