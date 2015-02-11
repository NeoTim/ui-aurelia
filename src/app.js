import {Router} from 'aurelia-router';
import {Behaviore} from 'aurelia-framework';

export class App {


    static inject() { return [Router, Element]; }


    constructor(router) {

        this.router = router;
        this.right = new Aside({open:false, fixed:true, side:"left"})
        this.router.configure(
            config => {

                config.title = 'Aurelia';
                config.map([

                    { route: ['','welcome'],  moduleId: 'welcome',      nav: true, title:'Welcome' },
                    { route: 'flickr',        moduleId: 'flickr',       nav: true },
                    { route: 'child-router',  moduleId: 'child-router', nav: true, title:'Child Router' }

                ]);


            });


    }


}
