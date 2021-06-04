import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Chevron from './chevron'

class Collapsible extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isExpanded: false,
        }
    }

    handleToggle(e) {
        e.preventDefault()
        this.setState({
            isExpanded: !this.state.isExpanded,
            setRotate: !this.state.setRotate,
            isActive: !this.state.isActive,
            height: this.refs.inner.clientHeight,
        })
    }

    render() {
        const { title, children, bgimage } = this.props
        const { isExpanded, height, setRotate, isActive } = this.state
        // ! The extra 60px is a correction for missing pixels at the bottom
        const contentHeight = isExpanded ? height + 60 : 0
        const buttonHeight = isExpanded ? 380 : 240

        return (
            <div
                className={`collapsible__section ${setRotate ? 'rotate' : ''}`}
            >
                <button
                    className={`collapsible ${isActive ? 'active' : ''}`}
                    onClick={e => this.handleToggle(e)}
                    style={{
                        backgroundImage: `url(${bgimage})`,
                        height: buttonHeight + 'px',
                    }}
                >
                    <h2 className="collapsible__title">{title}</h2>
                    <Chevron
                        className="collapsible__icon"
                        width={15}
                        fill={'#fff7f8'}
                    />
                </button>
                <div
                    className="collapsible__content"
                    style={{ height: contentHeight + 'px' }}
                >
                    <div className="collapsible__body" ref="inner">
                        {children}
                    </div>
                </div>
            </div>
        )
    }
}

Collapsible.propTypes = {
    title: PropTypes.string,
}

export default Collapsible
