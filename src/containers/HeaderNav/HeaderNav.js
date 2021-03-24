import React from 'react';
import {Form, Icon, Image, Input, Menu} from 'semantic-ui-react';
import './HeaderNav.scss';
import logo1 from '../../assets/images/logo.jpg';
//import logo2 from '../../assets/images/logo2.png';
//import logo3 from '../../assets/images/logo3.jpg';
//import logo4 from '../../assets/images/logo4.png';
import {Link, withRouter} from 'react-router-dom';

export class HeaderNav extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      query: '',
    };
  }
  render() {
    return (
      <Menu borderless className='top-menu' fixed='top'>
        <Menu.Item header className='logo'>
          <Link to='/'><Image src={logo1} size='tiny'/></Link>
        </Menu.Item>
        <Menu.Menu className='nav-container'>
          <Menu.Item className='search-input'>
            <Form onSubmit={this.onSubmit}>
              <Form.Field>
                <Input placeholder='Search'
                       size='small'
                       action='>'
                       value={this.state.query}
                       onChange={this.onInputChange}
                />
              </Form.Field>
            </Form>
          </Menu.Item>
          <Menu.Menu position='right'>
            <Menu.Item>
              <Icon className='header-icon' name='video camera' size='large'/>
            </Menu.Item>
            <Menu.Item>
              <Icon className='header-icon' name='grid layout' size='large'/>
            </Menu.Item>
            <Menu.Item>
              <Icon className='header-icon' name='chat' size='large'/>
            </Menu.Item>
            <Menu.Item>
              <Icon className='header-icon' name='alarm' size='large'/>
            </Menu.Item>
            <Menu.Item name='avatar'>
              <Icon className='header-icon' name='user secret' size='large' />
            </Menu.Item>
          </Menu.Menu>
        </Menu.Menu>
      </Menu>
    );
  }
  onInputChange = (event) => {
    this.setState({
      query: event.target.value,
    });
  };

  onSubmit = () => {
    const escapedSearchQuery = encodeURI(this.state.query);
    this.props.history.push(`/results?search_query=${escapedSearchQuery}`);
  };
}

export default withRouter(HeaderNav);
