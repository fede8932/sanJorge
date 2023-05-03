using System.ComponentModel.DataAnnotations;

namespace Repuestos_San_jorge.Models
{
    public class Seller
    {
        public int id { get; set; }

        [Required]
        public string cuil { get; set; }

        [Required]
        public string calle { get; set; }

        [Required]
        public int altura { get; set; }

        [Required]
        public int codigoPostal { get; set; }

        [Required]
        public string localidad { get; set; }

        [Required]
        public string telefono { get; set; }

        [Required]
        [RegularExpression(@"^\d{10}$")]
        public float comisionBase { get; set; }

        [Required]
        public float ComisionOferta { get; set; }

        public int userId { get; set; }
        public User user { get; set; }

        public Client client { get; set; }

        public Seller()
        {
            cuil = "";
            calle = "";
            telefono = "";
            localidad = "";
            user = new User();
            client = new Client();
        }
    }
}
