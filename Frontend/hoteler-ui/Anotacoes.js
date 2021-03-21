    const apiQuarto = useQuartoAPI();

    const inicialFromState = {codigo: null};

    const [quartos, setQuartos] = useState([]);
    const [currentQuarto, setCurrentQuarto] = useState(inicialFromState);   
    const [refreshQuartos, setRefreshQuartos] = useState(false); 
    const [totalPagesQuartos, setTotalPagesQuartos] = useState(1); 
    const [actualPageQuartos, setActualPageQuartos] = useState(1); 

    const apiHospede = useHospedeAPI();

    const [hospedes, setHospedes] = useState([]);
    const [currentHospede, setCurrentHospede] = useState(inicialFromState);   
    const [refreshHospedes, setRefreshHospedes] = useState(false); 
    const [totalPagesHospedes, setTotalPagesHospedes] = useState(1);
    const [actualPageHospedes, setActualPageHospedes] = useState(1);
    
    useEffect(()=>{

        const getDadosQuartos = async () => {
            const obj = await apiQuarto.fetchQuarto(actualPageQuartos-1, 5);
            if(obj){
                //console.log(obj)
                setQuartos(obj.dados)
                setTotalPagesQuartos(obj.paginas)
            }            
        }

        getDadosQuartos();

    },[refreshQuartos])

    useEffect(()=>{
        const getDadosHospedes = async () => {
            const obj = await apiHospede.fetchHospede(actualPageHospedes-1, 5);
            if(obj){
                //console.log(obj)
                setHospedes(obj.dados)
                setTotalPagesHospedes(obj.paginas)
            }
        }

        getDadosHospedes();
    },[refreshHospedes])

    // const addQuarto = async (quarto) => {
    //     const response = await apiQuarto.addQuarto(quarto)

    //     if(response.msg){
    //         setRefreshQuartos(!refreshQuartos)
    //         toast.success('Registro salvo com sucesso!!!')
    //     } else {
    //         for (let m of response.msgs)
    //             toast.error(m)
    //     }
    // }

    const updateQuarto = async (id, quarto) => {
        const response = await apiQuarto.updateQuarto(id, quarto)
        
        if(response.msg === "ok"){
            setRefreshQuartos(!refreshQuartos)
            toast.success('Registro alterado com sucesso!!!')
        } else {
            for (let m of response.msgs)
                toast.error(m)
        }
    }

    // const deleteQuarto = async (id) => {
    //     const response = await apiQuarto.deleteQuarto(id)

    //     if(response.msg === "ok"){
    //         setRefreshQuartos(!refreshQuartos)
    //         toast.success('Registro removido com sucesso!!!')
    //     } else {
    //         for (let m of response.msgs)
    //             toast.error(m)
    //     }
    // }

    const fetchQuarto = async (actualPage, size) => {
        const obj = await apiQuarto.fetchQuarto(actualPage, size);
        if(obj){
            //console.log(obj)
            setQuartos(obj.dados)
            setTotalPagesQuartos(obj.paginas)
            //console.log(JSON.stringify(categorias))
        }            
    }

    const editRowQuarto = (quarto) => {
        setCurrentQuarto(quarto)
    }

    // ------------------------//
    // const addHospede = async (quarto) => {
    //     const response = await apiQuarto.addHospede(quarto)

    //     if(response.msg){
    //         setRefreshHospedes(!refreshHospedes)
    //         toast.success('Registro salvo com sucesso!!!')
    //     } else {
    //         for (let m of response.msgs)
    //             toast.error(m)
    //     }
    // }

    const updateHospede = async (id, quarto) => {
        const response = await apiHospede.updateHospede(id, quarto)
        
        if(response.msg === "ok"){
            setRefreshHospedes(!refreshHospedes)
            toast.success('Registro alterado com sucesso!!!')
        } else {
            for (let m of response.msgs)
                toast.error(m)
        }
    }

    // const deleteHospede = async (id) => {
    //     const response = await apiHospede.deleteHospede(id)

    //     if(response.msg === "ok"){
    //         setRefreshHospedes(!refreshHospedes)
    //         toast.success('Registro removido com sucesso!!!')
    //     } else {
    //         for (let m of response.msgs)
    //             toast.error(m)
    //     }
    // }

    const fetchHospede = async (actualPage, size) => {
        const obj = await apiHospede.fetchHospede(actualPage, size);
        if(obj){
            //console.log(obj)
            setHospedes(obj.dados)
            setTotalPagesHospedes(obj.paginas)
            //console.log(JSON.stringify(categorias))
        }            
    }

    const editRowHospede = (quarto) => {
        setCurrentHospede(quarto)
    }