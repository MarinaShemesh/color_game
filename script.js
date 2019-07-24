                function Loadcolor(){
                
                
                //  let salmon = '#ffa07a';
                 
                               
                let colors = new Array('blue','red','yellow','pink',
                'orange','purple','black','white','grey', 'salmon', 'lime','brown' );

                let newcolor = Math.floor(Math.random() * colors.length);

                document.getElementById('colorhere').innerHTML = colors[newcolor]; 

                let divColor = colors[newcolor];

                console.log('colors[newcolor]:', colors[newcolor]);
                console.log('divColor:', colors[newcolor]);
                document.getElementById("colorBox").style.backgroundColor=divColor; 
             
            }


