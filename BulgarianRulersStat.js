function bulgarianRulersStat(input) {
  let ruler = input[0];
  let startYear = input[1];
  let endYear = input[2];
  let lenghtRuler = ruler.length;

  let yearsSum = endYear - startYear;
  if (yearsSum > 15) {
    console.log(
      `${ruler[0].toUpperCase()}${ruler
        .slice(1, lenghtRuler)
        .toLowerCase()} e управлявал ${yearsSum} години.`
    );
  }
}
bulgarianRulersStat(["асПАРуХ", 681, 700]);
bulgarianRulersStat(["тЕРвеЛ", 700, 718]);
bulgarianRulersStat(["СеВаР", 738, 753]);
bulgarianRulersStat(["каРДАм", 777, 803]);
bulgarianRulersStat(["крум", 803, 814]);
bulgarianRulersStat(["ОмурТАг", 814, 831]);
