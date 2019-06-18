import React from 'react';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import { ReactComponent as IcoGlobal} from '../../assets/img/ico-global.svg'
import i18n from '../../i18n';

export default class Example extends React.Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = {
      dropdownOpen: false
    };
  }
  state = {
    value: "en"
  };
  handleChange = event => {
    let newlang = event.target.value;
    this.setState(prevState => ({ value: newlang }));
    console.log("state value is", newlang);
    i18n.changeLanguage(newlang);

  };

  toggle() {
    this.setState(prevState => ({
      dropdownOpen: !prevState.dropdownOpen
    }));
  }

  render() {

    return (
      <Dropdown direction="up"  isOpen={this.state.dropdownOpen} toggle={this.toggle}>
        <DropdownToggle className="button-localization" caret>
          <i className="ico-global"><IcoGlobal width="100%" /></i>
          <span className="selected">{i18n.language === "ptBr" ? "PT-BR" : "EN"}</span>
        </DropdownToggle>
        <DropdownMenu>
          <DropdownItem value="en" onClick={ (e) => this.handleChange(e)  }>English</DropdownItem>
          <DropdownItem value="ptBr" onClick={(e) => this.handleChange(e)}>Português do Brasil</DropdownItem>
        </DropdownMenu>
      </Dropdown>
    );
  }
}