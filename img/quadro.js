// JavaScript File
function diskriminant() {
                var d;
                var d_sqr;
                var x_1;
                var x_2;

                var a = prompt('Type value a', 1);
                var b = prompt('Type value b', 10);
                var c = prompt('Type value c', 3);

                var res = new Array(1,2,3);
                
                d = (b*b)-(4*a*c);
                
                if (d>=0) {
                    d_sqr=Math.sqrt(d);

                    x_1=(-b-d_sqr)/(2*a);
                    x_2=(-b+d_sqr)/(2*a);
                    res[0]=d;
                    res[1]=x_1;
                    res[2]=x_2;
                }

                if (d<0) {
                    res[0]=d;
                    res[1]=0;
                    res[2]=0;
                }

                 alert(res);
                 
            }            
                
            diskriminant();
