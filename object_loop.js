function objPropetyLoop(obj)
{
    for (var prop in obj)
    {
        if(obj.hasOwnProperty(prop))
            console.log(prop);
    }
}

objPropetyLoop(console);
