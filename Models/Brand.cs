using System.ComponentModel.DataAnnotations;
using Microsoft.EntityFrameworkCore;

namespace Repuestos_San_jorge.Models
{
    public class Brand
    {
        [Key]
        public int id { get; set; }

        [Required]
        public string name { get; set; }

        public ICollection<BrandSupplier>? brandSuppliers { get; set; }

        public ICollection<BrandProduct>? brandProducts { get; set; }

        public Stock? stock { get; set; }
    }
}
