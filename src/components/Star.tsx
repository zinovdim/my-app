import React from "react";

type StarPropsType = {
    value: number
}

export function Star(props: StarPropsType) {
    console.log("Star rendering")
    if (props.value === 1) {
        return (
            <div>
                <StarName selected={true}/>
                <StarName selected={false}/>
                <StarName selected={false}/>
                <StarName selected={false}/>
                <StarName selected={false}/>
            </div>
        );
    }
    if (props.value === 2) {
        return (
            <div>
                <StarName selected={true}/>
                <StarName selected={true}/>
                <StarName selected={false}/>
                <StarName selected={false}/>
                <StarName selected={false}/>
            </div>
        );
    }
    if (props.value === 3) {
        return (
            <div>
                <StarName selected={true}/>
                <StarName selected={true}/>
                <StarName selected={true}/>
                <StarName selected={false}/>
                <StarName selected={false}/>
            </div>
        );
    }
    if (props.value === 4) {
        return (
            <div>
                <StarName selected={true}/>
                <StarName selected={true}/>
                <StarName selected={true}/>
                <StarName selected={true}/>
                <StarName selected={false}/>
            </div>
        );
    }
    if (props.value === 5) {
        return (
            <div>
                <StarName selected={true}/>
                <StarName selected={true}/>
                <StarName selected={true}/>
                <StarName selected={true}/>
                <StarName selected={true}/>
            </div>
        );
    }
    return (
        <div>
            <StarName selected={false}/>
            <StarName selected={false}/>
            <StarName selected={false}/>
            <StarName selected={false}/>
            <StarName selected={false}/>
        </div>
    );
}

type StarNamePropsType = {
    selected: boolean
}

function StarName(props: StarNamePropsType) {
    console.log("Star rendering")
    if (props.selected === true) {
        return <span><b>STAR </b></span>
    } else {
        return <span>STAR </span>
    }
}