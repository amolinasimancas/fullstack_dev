// scraps database
const scraps = [
    {
        name: "PLIV",
        density: 0.45,
        yield: 0.83,
        cu: 0.2,
        cr: 0.1,
        ni: 0.05,
        sn: 0.08,
    },
    {
        name: "PESA",
        density: 0.58,
        yield: 0.89,
        cu: 0.5,
        cr: 0.3,
        ni: 0.3,
        sn: 0.1,
    },
    {
        name: "CIZA",
        density: 0.46,
        yield: 0.83,
        cu: 0.5,
        cr: 0.3,
        ni: 0.3,
        sn: 0.1,
    },
    {
        name: "ESTA",
        density: 0.42,
        yield: 0.95,
        cu: 0.06,
        cr: 0.03,
        ni: 0.09,
        sn: 0.01,
    },
    {
        name: "RINT",
        density: 3.25,
        yield: 0.97,
        cu: 0.35,
        cr: 0.1,
        ni: 0.1,
        sn: 0.1,
    },
    {
        name: "ALAM",
        density: 0.42,
        yield: 0.83,
        cu: 0.35,
        cr: 0.3,
        ni: 0.1,
        sn: 0.1,
    },
    {
        name: "VRAC",
        density: 0.50,
        yield: 0.83,
        cu: 0.3,
        cr: 0.43,
        ni: 0.32,
        sn: 0.019,
    },
    {
        name: "ARRA",
        density: 4,
        yield: 0.96,
        cu: 0,
        cr: 0,
        ni: 0,
        sn: 0,
    },
    {
        name: "DRI",
        density: 4,
        yield: 0.85,
        cu: 0,
        cr: 0,
        ni: 0,
        sn: 0,
    },
    {
        name: "CAL",
        density: 0.85,
        yield: 0,
        cu: 0,
        cr: 0,
        ni: 0,
        sn: 0,
    },
    {
        name: "DOLO",
        density: 0.85,
        yield: 0,
        cu: 0,
        cr: 0,
        ni: 0,
        sn: 0,
    },
    {
        name: "COKE",
        density: 0.85,
        yield: 0,
        cu: 0,
        cr: 0,
        ni: 0,
        sn: 0,
    }
]

var buckets = prompt("Select the quantity of buckets to be charged inside the EAF (1, 2 or 3)");

function bucket_configurator(buckets) {
    for(var i = 0; i < buckets; i++ ){
        var layers = prompt("Select the quantity of layers to divide this bucket");
        for(var i = 1; layers; i++){
            console.log("Hola!");
        }
    }
}