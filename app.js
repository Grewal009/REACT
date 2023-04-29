
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
         *       div id = child2
         *                  <h1></h1>
         *      /div
         * /div
         * 
         */
    
        const parent = React.createElement(
                "div",
                {id:"parent"},
                [
                        React.createElement(
                                "div",
                                {id:"child1", key:"child 01", xyx:"1"},
                                React.createElement(
                                        "h1",
                                        {},
                                        "Heading 1"
                                )
                        ),
                        React.createElement(
                                "div",
                                {id:"child2",key:"child 02", xyz:"2"},
                                React.createElement(
                                        "h1",
                                        {},
                                        "Heading 2"
                                )
                        )
                ]
        );


        const root = ReactDOM.createRoot(document.getElementById("root"));

        root.render(parent);
