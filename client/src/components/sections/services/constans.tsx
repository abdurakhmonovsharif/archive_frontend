import Narxnoma from '../../../assets/img/services/narxnoma.gif'
import JismoniyShaxs from '../../../assets/img/services/jismoniy-shaxs.svg'
import DarkJismoniyShaxs from '../../../assets/img/services/jismoniy-dark-shaxs.svg'
import YurudikShaxs from '../../../assets/img/services/yuridik-shaxs.svg'
import DarkYurudikShaxs from '../../../assets/img/services/yuridik-dark-shaxs.svg'
import Etuk from '../../../assets/img/services/etuk-icon.svg'
import DarkEtuk from '../../../assets/img/services/etuk-dark-icon.svg'
import Corruption from '../../../assets/img/services/corruption.svg'
import Question from '../../../assets/img/services/question-icon.svg'
import DarkQuestion from '../../../assets/img/services/question-dark-icon.svg'
export const services = [
    { 
        label: "Jismoniy shaxslar uchun", 
        darkIcon: <img className={"mx-auto"} src={DarkJismoniyShaxs} alt={"dark icon"}/>, 
        icon: <img className={"mx-auto"} src={JismoniyShaxs} alt={"icon"}/> 
    },
    { 
        label: "Yuridik shaxslar uchun", 
        darkIcon: <img className={"mx-auto"} src={DarkYurudikShaxs} alt={"dark icon"}/>, 
        icon: <img className={"mx-auto"} src={YurudikShaxs} alt={"icon"}/> 
    },
    { 
        label: "Narxnoma", 
        darkIcon: <img className={"mx-auto rounded"} src={Narxnoma} alt={"dark icon"}/>, 
        icon: <img className={"mx-auto rounded"} src={Narxnoma} alt={"icon"}/>
    },
    { 
        label: "ETUK kengashi", 
        darkIcon: <img className={"mx-auto"} src={DarkEtuk} alt={"dark icon"}/>, 
        icon: <img className={"mx-auto"} src={Etuk} alt={"icon"}/>
    },
    { 
        label: "Savol yo'llash", 
        darkIcon: <img className={"mx-auto"} src={DarkQuestion} alt={"dark icon"}/>, 
        icon: <img className={"mx-auto"} src={Question} alt={"icon"}/>
    },
    { 
        label: "Korrupsiyaga qarshi kurash", 
        darkIcon: <img className={"mx-auto rounded-full"} src={Corruption} alt={"dark icon"}/>, 
        icon: <img className={"mx-auto rounded-full"} src={Corruption} alt={"icon"}/>
    },
];