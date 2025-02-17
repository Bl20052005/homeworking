import React from "react";

import "./levelbox.css";

type LevelBoxProps = {
    hints: Array<string>;
    score: number;
}
type LevelBoxState = {
    select: number;
}
export class LevelBox extends React.Component<LevelBoxProps, LevelBoxState> {
    state = {
        select: 0
    }

    constructor(props: any) {
        super(props);
    }

    getSlideOffset() {
        return `${10 + this.state.select * 20}%`;
    }

    getScoreWidth() {
        return `${this.props.score}%`;
    }

    getScoreColor() {
        if(this.props.score < 25) return "crimson";
        else if(this.props.score < 50) return "red";
        else if(this.props.score < 75) return "orange";
        else if(this.props.score < 90) return "lime";
        return "green";
    }

    onSlideClick(value: number) {
        this.setState({select: value});
    }

    render() {
        return (
            <div className="lb">
                <div className="lb-slide">
                    <div className="lb-slide-bar">
                        <div className="lb-slide-bar-select" style={{"left": this.getSlideOffset()}}></div>
                        <ul className="lb-slide-bar-zone">
                            <li onClick={() => this.onSlideClick(0)}><div className="lb-slide-l1"></div></li>
                            <li onClick={() => this.onSlideClick(1)}><div className="lb-slide-l2"></div></li>
                            <li onClick={() => this.onSlideClick(2)}><div className="lb-slide-l3"></div></li>
                            <li onClick={() => this.onSlideClick(3)}><div className="lb-slide-l4"></div></li>
                            <li onClick={() => this.onSlideClick(4)}><div className="lb-slide-l5"></div></li>
                        </ul>
                    </div>
                    <div className="lb-slide-tag">
                        <ul>
                            <li>20%</li>
                            <li>40%</li>
                            <li>60%</li>
                            <li>80%</li>
                            <li>100%</li>
                        </ul>
                    </div>
                    <p className="lb-slide-title">Hint Levels</p>
                </div>
                <div className="lb-answer">
                    <div className="lb-answer-gauge" style={{"width": this.getScoreWidth(), "backgroundColor": this.getScoreColor()}}></div>
                    <p>Your Answer</p>
                </div>
                <div className="lb-text">
                    <p>{this.props.hints[this.state.select]}</p>
                </div>
            </div>
        );
    }
}