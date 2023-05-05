using System.ComponentModel.DataAnnotations;

namespace Repuestos_San_jorge.Models
{
    public class Supplier
    {
        public int id { get; set; }

        [Required]
        public string razonSocial { get; set; }

        [Required]
        public string cuit { get; set; }

        [Required]
        public string calle { get; set; }

        [Required]
        public int altura { get; set; }

        [Required]
        public string localidad { get; set; }

        [Required]
        public int codigoPostal { get; set; }

        [Required]
        [RegularExpression(@"^\d{10}$")]
        public string telefono { get; set; }

        [Required]
        [EmailAddress]
        public string email { get; set; }

        public ICollection<Representative> representative { get; set; }

        public ICollection<CustomerDiscount> customerDiscounts { get; set; }

        public ICollection<BrandSupplier> brandSuppliers { get; set; }

        public Supplier()
        {
            razonSocial = "";
            cuit = "";
            calle = "";
            telefono = "";
            localidad = "";
            email = "";
            representative = new List<Representative>();
            customerDiscounts = new List<CustomerDiscount>();
            brandSuppliers = new List<BrandSupplier>();
        }
    }
}
