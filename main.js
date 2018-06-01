alert('Вам будет предложено ввести параметры цилиндра, для расчета его объема.');
        
     do    {h=prompt('Введите высоту','');
            if(h==""){
                alert('Вы не ввели число, попробуйте еще раз');
            }else if(h==0){
                alert('вы ввевли 0, произведение любого числа на 0 в результате даст ноль, попробуйте еще раз');
            }else if(isNumber(h)==false){
                alert('Вы ввели не число, попробуйте еще раз'); 
            }
    }        while(h<1);  
       do {r=prompt('Введите радиус','');
            if(r==0){
                alert('вы ввевли 0, произведение любого числа на 0 в результате даст ноль, попробуйте еще раз');
            }
        }
            while(r<1);
            function isNumber(h) {
                return isFinite(h);
            }
            console.log(isNumber(h));// для проверки вывода

        ress=Math.PI*r*r;
        console.log(ress);//для проверки вывода
        res=ress*h;
        console.log(res);//для проверки вывода
        document.writeln('<p>**************</p>');
        document.writeln('<p>Обьем цилиндра с площадью основы <strong>S=</strong>' +ress+ ', радиусом <strong>R= </strong>'+r+ ' и высотой <strong>H= </strong>' +h+ ' равен:</p>');
        document.writeln('<p>--------------------</p>');
        document.writeln('<p>V=' +res+ '</p>');
        document.writeln('<p>--------------------</p>');
        document.writeln('<p>end</p>');
