using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Repuestos_San_jorge.Models
{
    public class Supplier
    {
        [Key]
        public int id { get; set; }

        [Required]
        public string razonSocial { get; set; }

        [Required]
        [RegularExpression(@"^\d{2}-\d{8}-\d{1}$", ErrorMessage = "El CUIT debe tener el formato XX-XXXXXXXX-X")]
        public string cuit { get; set; }

        [Required]
        public string calle { get; set; }

        [Required]
        public int altura { get; set; }

        [Required]
        public string localidad { get; set; }

        [StringLength(300)]
        public string? comentarios { get; set; }

        [Required]
        public int codigoPostal { get; set; }

        public Boolean? status { get; set; }

        [Required]
        [RegularExpression(@"^\d{10}$")]
        public string telefono { get; set; }

        [Required]
        [EmailAddress]
        public string email { get; set; }

        public int? currentAcountId { get; set; }

        public ICollection<Representative>? representative { get; set; }

        public ICollection<CustomerDiscount>? customerDiscounts { get; set; }

        public ICollection<BrandSupplier>? brandSuppliers { get; set; }

        [ForeignKey("currentAcountId")]
        public CurrentAcount? currentAcount { get; set; }

        public Supplier()
        {
            status = true;
        }
    }
}
