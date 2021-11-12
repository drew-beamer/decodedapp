export default function ranks() {
    const data = "1	St. Bonaventure	1640	16.55961193	100 \
    2	VCU	1606	7.550397643	87 \
    3	Richmond	1488	11.33192714	79 \
    4	Davidson	1573	7.086468798	77 \
    5	Dayton	1564	6.500204047	63 \
    6	Saint Louis	1575	6.354543712	62 \
    7	Rhode Island	1445	6.657809712	60 \
    8	Massachusetts	1515	4.696393829	46 \
    9	George Mason	1526	0.433537921	44 \
    10	Duquesne	1523	-0.535546315	36 \
    11	La Salle	1377	-3.755065591	19 \
    12	Saint Joseph's	1430	-3.847772873	17 \
    13	George Washington	1413	-4.860330351	10 \
    14	Fordham	1317	-8.057106409	0"
    return data.split("    ");
}