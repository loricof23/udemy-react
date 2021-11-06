const Index = () => {
    const buttonText = 'Click Gw Dong';
    const age = 12;

    const perluRenderButtonNggak = true;
    const labelName = 'Enter : ';
    const renderName = () => {
        const myName = 'Loriko';

        return myName;
    }

    return (
        <div>
            <div>
                <label className="label" forName="name">
                    { labelName }
                </label>
                <input id="name" type="text" />

                {perluRenderButtonNggak &&
                    <button style={{ backgroundColor: 'blue', color: 'white' }}>
                        {buttonText}
                    </button>
                }        
            </div>
            <div>Umur gua {age}, dan nama gw {renderName()}</div>
        </div>
    );
}