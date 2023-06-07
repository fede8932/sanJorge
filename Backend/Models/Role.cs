using System.ComponentModel.DataAnnotations;

namespace Repuestos_San_jorge.Models
{
    public class Role
    {
        [Key]
        public int id { get; set; }

        [Required]
        public string name { get; set; }

        public ICollection<User>? users { get; set; }
    }
}
