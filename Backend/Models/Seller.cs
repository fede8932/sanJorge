using System.ComponentModel.DataAnnotations;

namespace Repuestos_San_jorge.Models
{
    public class Seller
    {
        [Key]
        public int id { get; set; }

        [Required]
        [RegularExpression(@"^\d{2}-\d{8}-\d{1}$", ErrorMessage = "El CUIT debe tener el formato XX-XXXXXXXX-X")]
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
        [RegularExpression(@"^\d{10}$")]
        public string telefono { get; set; }

        public float? comisionBase { get; set; }

        public float? comisionOferta { get; set; }

        public int userId { get; set; }
        public User? user { get; set; }

        public ICollection<Client>? clients { get; set; }
    }
}
