De gebruiker kiest zijn onderdelen uit een lijst. Links kiest de gebruiker de catagorie waarna rechts in het vlak de verschillende bijhorende producten getoont worden. Rechts in beeld staat een lijst met de gekozen producten per catagorie met de prijzen en een totaal prijs. Wanneer alle producten gekozen zijn kan de pc besteld worden.

Per productcatagorie(Cpu,Gpu, voeding, moederbord etc) wordt een model gevuld. In de state resolver van een view doe ik een call naar een factory om de juiste items op de halen voor de desbetreffende view. Daarnaast heb ik een overkoepelend model waarin ik bijhoud welk item per product catagorie geselecteerd is. Het overkoepelend model wordt gevalideerd zodat er altijd een complete pc besteld word.

Daarna wordt de gebruiker naar een view gestuurd met een overzicht van de samengestelde pc met bijhorende prijs. Alles wordt in het geheel nog gevalideerd door een service
