import React from 'react';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import { ReactComponent as IcoGlobal} from '../../assets/img/ico-global.svg'
import i18n from '../../i18n';

export default class Localization extends React.Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = {
      dropdownOpen: false
    };
  }
  handleChange = event => {
    const newlang = event.target.value;
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
          <DropdownItem value="en" onClick={this.handleChange}>English</DropdownItem>
          <DropdownItem value="ptBr" onClick={this.handleChange}>Português do Brasil</DropdownItem>
        </DropdownMenu>
      </Dropdown>
    );
  }
}