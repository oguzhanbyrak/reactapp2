import React, {useState} from 'react';
import AtomButton from '../../atoms/buttons/AtomButton'
import AtomLabel from '../../atoms/labels/AtomLabel'
import PropTypes from "prop-types";

/**
* Buttons style creation process.
*/
const sxGray = {
    width:150,
    color:"black",
    backgroundColor:"#cfc9c9",
    borderRadius:0,
    border:"1px solid gray",
    fontSize:"16pt",
};

/**
* Buttons style creation process.
*/
const sxGrayBig = {
    width:300,
    color:"black",
    backgroundColor:"#cfc9c9",
    borderRadius:0,
    border:"1px solid gray",
    fontSize:"16pt",
};

/**
* Buttons style creation process.
*/
const sxOrange = {
    width:150,
    color:"white",
    backgroundColor:"#ff8721",
    borderRadius:0,
    border:"1px solid gray",
    fontSize:"16pt",
};

/**
* Buttons style creation process.
*/
const sxLabel = {
    color:'white', 
    fontSize:"20pt", 
    float:'right',
    marginRight:'2%'
};

/**
* 1.Action buttons creation process.
*/
const operators = [
    {title: '+', val: '+'},
    {title: '-', val: '-'},
    {title: 'x', val: '*'},
    {title: '÷', val: '/'},
];

/**
* 1.Action buttons creation process.
*/
const operators2 = [
    {title: 'AC', val: 'AC'},
    {title: '+/-', val: '+-'},
    {title: '%', val: '%'},
];

/**
* Keyboard creation creation process.
*/
const AtomKeys = (props:any) =>{
    
    /**
     * All react hooks creation process.
    */
    const [total, process] = useState<string>("");
    const [value, setResult] = useState<string>('');
    const [op, setOp] = useState<string>('');
    const [op2, setOp2] = useState<string>('');
    
    /**
     * Handling of buttons clicked on the keyboard
    */
    const clickKeys = (number:any) => {   
        if(total == ""){ 
            if(number == "0") { number = ""; }
            if(number == ".") { number = "0."; }
        }
        if(number == "." && total.indexOf(".") > -1) { number=""; }    
        process(total + number);
    };

    /**
     * The method by which the operation is performed
     * Performs the operation selected with the 2 numbers entered.
     * It is performed according to the selected transaction type.(+,-,*,/)
    */
    const calculate = () => {
        switch (op) {
            /**
             * If the selected operation is +, the addition operation is performed inside.
             * The first entered number is taken as 'value', the second entered number is taken as 'total'.
            */
            case '+':
                process((parseFloat(value) + parseFloat(total)) + '');
                return setResult(total);
            /**
             * If the selected operation is -, the addition operation is performed inside.
            */
            case '-':
                process((parseFloat(value) - parseFloat(total)) + '');
                return setResult(total);
            /**
             * If the selected operation is *, the addition operation is performed inside.
            */
            case '*':
                process((parseFloat(value) * parseFloat(total)) + '');
                return setResult(total);
            /**
             * If the selected operation is /, the addition operation is performed inside.
            */
            case '/':
                process((parseFloat(value) / parseFloat(total)) + '');
                return setResult(total);
            default:
                return '';
        }
    };

    /**
     * The selected mathematical operation is thrown into react hooks, the first number written is sent with react hooks and the field is cleared.
    */
    const clickOperators = (operator : any) => {
        setOp(operator);
        setResult(total);
        process("");
        
    };

    /**
     * Actions to be performed if 'AC', '+/-', '%' are selected from the keyboard.
    */
    const clickOperators2 = (operator : any) => {
        switch(operator){
            /*
             * If 'AC' is selected from the keyboard, the fields are cleared.           
            */
            case 'AC':
                process(""); 
                setResult("");
                return;
            /*
             * If '+/-' is selected from the keyboard, the number is converted to negative if it is positive and to positive if it is negative.           
            */
            case '+-':
                if(total != ""){
                    let reverse = -parseFloat(total);
                    process(reverse.toString());
                }
                return;
            /*
             * If '%' is selected from the keyboard, % of the entered number is calculated and printed.       
            */
            case '%':
                if(total != ""){
                    let percentage = parseFloat(total)/100;
                    process(percentage.toString());
                }
                return;
            default:
                return;
        }
    };

    /*
     * The necessary array element is created for the numbers on the keyboard to be formed. (0,1......8,9)
    */
    const createNumberButtons = (limit: number) => {
        const numArr = [];
        for (let i = 0; i < limit; i++) {
            numArr.push({title: `${i}`, val: `${i}`, sxVal : i== 0 ? sxGrayBig : sxGray});
        }
        numArr.push({title: '.', val: '.', sxVal : sxGray});
        return numArr;
    }
    /*
     *Calls the function to generate the numbers on the keyboard.
    */
    const createNumberButtonProcess = createNumberButtons(10);

    /*
     *The numbers on the keyboard are created and thrown into the array.
    */
    const numberButtons = createNumberButtonProcess.map(el => <AtomButton type="button" disabled={false} buttonText={el.title} sx={el.sxVal} 
    onClick={() => clickKeys(el.val) }/>);

    /*
     *The action buttons on the keyboard are created and thrown into the array. (+, -, *, /)
    */
    const opBtnsDOM = operators.map(el => <AtomButton type="button" disabled={false} sx={sxOrange} buttonText={el.title}
    onClick={() => clickOperators(el.val)}/>);

    /*
     *The other action buttons on the keyboard are created and thrown into the array. (AC, +/-, % )
    */
    const opBtnsDOM2 = operators2.map(el => <AtomButton type="button" disabled={false} sx={sxGray} buttonText={el.title}
    onClick={() => clickOperators2(el.val)}/>);

    return (
        <div>
            <div style={{width:600, height:40, backgroundColor:'gray'}}>
                {/* The area where we display all transactions and results. */}
                <AtomLabel sx={sxLabel} text={total}/>
            </div>
            <div>
                
                {/* The 'AC' button we created earlier in the array is added to the keyboard. */}
                {opBtnsDOM2[0]}

                {/* The '+/-' button we created earlier in the array is added to the keyboard. */}
                {opBtnsDOM2[1]}

                {/* The '%' button we created earlier in the array is added to the keyboard. */}
                {opBtnsDOM2[2]}

                {/* The '/' button we created earlier in the array is added to the keyboard. */}
                {opBtnsDOM[3]}

                {/* The '7' button we created earlier in the array is added to the keyboard. */}
                {numberButtons[7]}

                {/* The '8' button we created earlier in the array is added to the keyboard. */}
                {numberButtons[8]}

                {/* The '9' button we created earlier in the array is added to the keyboard. */}
                {numberButtons[9]}

                {/* The '*' button we created earlier in the array is added to the keyboard. */}
                {opBtnsDOM[2]}

                {/* The '4' button we created earlier in the array is added to the keyboard. */}
                {numberButtons[4]}

                {/* The '5' button we created earlier in the array is added to the keyboard. */}
                {numberButtons[5]}

                {/* The '6' button we created earlier in the array is added to the keyboard. */}
                {numberButtons[6]}

                {/* The '-' button we created earlier in the array is added to the keyboard. */}
                {opBtnsDOM[1]}

                {/* The '1' button we created earlier in the array is added to the keyboard. */}
                {numberButtons[1]}

                {/* The '2' button we created earlier in the array is added to the keyboard. */}
                {numberButtons[2]}

                {/* The '3' button we created earlier in the array is added to the keyboard. */}
                {numberButtons[3]}

                {/* The '+' button we created earlier in the array is added to the keyboard. */}
                {opBtnsDOM[0]}

                {/* The '0' button we created earlier in the array is added to the keyboard. */}
                {numberButtons[0]}

                {/* The '.' button we created earlier in the array is added to the keyboard. */}
                {numberButtons[10]}

                {/* A button that allows us to view all processes and results. */}
                <AtomButton type="button" disabled={false} buttonText="=" onClick={calculate} sx={sxOrange}/>  
            </div>
    </div>
    )
}

export default AtomKeys;