using System.ComponentModel.DataAnnotations;

namespace Repuestos_San_jorge.Models
{
    public class Representative
    {
        [Key]
        public int id { get; set; }

        [Required]
        public string name { get; set; }

        [Required]
        public string apellido { get; set; }

        [Required]
        [EmailAddress]
        public string email { get; set; }

        [Required]
        [RegularExpression(@"^\d{10}$")]
        public string telefono { get; set; }

        public int supplierId { set; get; }
        public Supplier supplier { get; set; }

        public Representative()
        {
            name = "";
            apellido = "";
            telefono = "";
            email = "";
            supplier = new Supplier();
        }
    }
}
