import Condition from '../Comp02_Condition';
import Event from '../Comp03_Event';
import Book from '../Comp05_Book';
import ProductState from '../Comp06_ProductState';
import EffectComponent from '../Comp07_EffectComponent';
import Form_Ref from '../Comp08_Form_Ref';
import Router from '../Comp09_Router';
import Reduce from '../Comp12_Reduce'
import Redux from '../Comp13_Redux'
import ReduxToolkit from '../Comp14_Reduxtoolkit'
import BC_Component from '../Board_CustomerComponect';

let router = [
    { path: "/", element: <Condition />, },
    { path: "/condition", element: <Condition />, },
    { path: "/event", element: <Event />, },
    { path: "/book", element: <Book />, },
    { path: "/productState", element: <ProductState />, },
    { path: "/effectComponent", element: <EffectComponent />, },
    { path: "/form_Ref", element: <Form_Ref />, },
    { path: "/router/*", element: <Router />, },
    { path: "/reduce", element: <Reduce />, },
    { path: "/redux", element: <Redux />, },
    { path: "/reduxToolkit", element: <ReduxToolkit />, },
    { path: "/bc_Component/*", element: <BC_Component />, },
];

export default router;