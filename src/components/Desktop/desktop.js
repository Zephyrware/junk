import React, {Component} from 'react';
import { openProgram } from '../../actions/openProgram';
import { connect } from 'react-redux';
import Window from '../Window/window';
import Icon from '../Desktop/Icon/icon';
import MyComputerLogo from './my_computer.png';

import './desktop.css';

class Desktop extends Component {
    myComputer = {
        id: 'My_Computer',
        logo: MyComputerLogo,
    }

    render() {
        return (
            <div className="desktop">                
                <Icon onDoubleClick={() => this.props.openProgram(this.myComputer)} img={MyComputerLogo} appName="My Computer"/>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    program: state.program
});

const mapDispatchToProps = dispatch => ({
    openProgram: newProgram => dispatch(openProgram(newProgram.id, newProgram))
});
export default connect(mapStateToProps, mapDispatchToProps)(Desktop);