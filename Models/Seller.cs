using System.ComponentModel.DataAnnotations;

namespace Repuestos_San_jorge.Models
{
    public class Seller
    {
        [Key]
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

        public float? comisionBase { get; set; }

        public float? comisionOferta { get; set; }

        public int userId { get; set; }
        public User? user { get; set; }

        public ICollection<Client>? clients { get; set; }

        // public Seller()
        // {
        //     cuil = "";
        //     calle = "";
        //     telefono = "";
        //     localidad = "";
        //     user = new User();
        //     client = new Client();
        // }
    }
}
