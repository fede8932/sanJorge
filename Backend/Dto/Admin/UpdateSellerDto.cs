namespace Repuestos_San_jorge.Dto.Admin
{
    public class UpdateSellerDto
    {
        public string calle { get; set; }
        public int altura { get; set; }
        public int codigoPostal { get; set; }
        public string localidad { get; set; }
        public string telefono { get; set; }
        public string email { get; set; }
        public float comisionBase { get; set; }
        public float comisionOferta { get; set; }
    }
    
}