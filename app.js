
        //heading is an object or react element
        const heading = React.createElement(
        "h1", //html tag name
        {id:"h1", zyz:"abc"}, //h1 tag properties or attributes
        "Hello World! printed using React." //pops or childrens that are passes into the h1 tag
        );

        //created nested element structure
        /**
         * div id = parent
         *      div id = child
         *                  <h1></h1>
         *      /div
         * /div
         * 
         */
    
        const child = React.createElement("div", {id:"child"}, heading);
        const parent = React.createElement("div", {id:"parent"}, child);


        const root = ReactDOM.createRoot(document.getElementById("root"));

        root.render(parent);
