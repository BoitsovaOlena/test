import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';


import All from './components/All';
import Projects from './components/Projects';
import Header from './components/Header'
import Footer from './components/Footer'



ReactDOM.render(
    <Provider store={store}>
        <Router>
            <Header />
            <main>
                <Switch>
                    <Route path="/confidentiality" component={All} />
                    <Route path="/investors" component={All} />
                    <Route path="/we" component={All} />
                    <Route path="/profile" component={All} />
                    <Route path="/projects" component={Projects} />
                    <Route path="/translation" component={All} />
                    <Route path="/studio" component={All} />
                    <Route path="/" exact component={All} />
                    <Route path="*" render={() => <div>This page does not exist</div>} />
                </Switch>
            </main>
            <Footer />
        </Router>
    </Provider>,
    document.getElementById('app')
);


// ReactDOM.render(
//     <Provider store={store}>
//         <Router>
//             <Header />
//             <main>
//                 <Switch>
//                     <Route path="/сontact" component={Info} /> 
//                     <Route path="/task" component={App} />
//                     <Route path="/" exact component={Product} />
//                     <Route path="*" render={() => <div>Упс, ошибка</div>} />
//                 </Switch>
//             </main>
//         </Router>
//     </Provider>,
//     document.getElementById('app')
// );
