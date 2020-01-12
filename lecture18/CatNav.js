class CatNav extends React.Component {
  render() {
    console.log(this.props);
    const links = this.props.data.map((obj, index) => {
      return (
        <li key={index} className="cat-link left valign-wrapper">
          <i className="material-icons">{obj.icon}</i>
          {obj.title}
        </li>
      );
    });

    return (
      <div className="row">
        <ul className="cat-nav center-align">{links}</ul>
      </div>
    );
  }
}
