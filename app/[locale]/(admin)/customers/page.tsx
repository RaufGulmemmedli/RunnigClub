"use client"

import { useState } from "react"
import { useTranslations } from "next-intl"
import { Button } from "@/components/ui/button"
import { DataTable } from "@/components/data-table"
import { CustomerModal } from "@/components/customer-modal"
import { Plus } from "lucide-react"
import { useToast } from "@/hooks/use-toast"

interface Customer {
  id: string
  name: string
  email: string
  status: boolean
  createdAt: string
}

export default function CustomersPage() {
  const t = useTranslations("customers")
  const { toast } = useToast()
  const [customers, setCustomers] = useState<Customer[]>([
    {
      id: "1",
      name: "John Doe",
      email: "john@example.com",
      status: true,
      createdAt: "2024-01-15",
    },
    {
      id: "2",
      name: "Jane Smith",
      email: "jane@example.com",
      status: false,
      createdAt: "2024-01-14",
    },
    {
      id: "3",
      name: "Bob Johnson",
      email: "bob@example.com",
      status: true,
      createdAt: "2024-01-13",
    },
  ])
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [editingCustomer, setEditingCustomer] = useState<Customer | null>(null)

  const columns = [
    { key: "name", label: t("name"), sortable: true },
    { key: "email", label: t("email"), sortable: true },
    { key: "status", label: t("status"), sortable: true },
    { key: "createdAt", label: "Created At", sortable: true },
  ]

  const handleEdit = (customer: Customer) => {
    setEditingCustomer(customer)
    setIsModalOpen(true)
  }

  const handleDelete = (customer: Customer) => {
    setCustomers(customers.filter((c) => c.id !== customer.id))
    toast({
      title: "Customer deleted",
      description: `${customer.name} has been removed.`,
    })
  }

  const handleSave = (customerData: Omit<Customer, "id">) => {
    if (editingCustomer) {
      setCustomers(
        customers.map((c) => (c.id === editingCustomer.id ? { ...customerData, id: editingCustomer.id } : c)),
      )
      toast({
        title: "Customer updated",
        description: "Customer information has been updated successfully.",
      })
    } else {
      const newCustomer = {
        ...customerData,
        id: Date.now().toString(),
      }
      setCustomers([...customers, newCustomer])
      toast({
        title: "Customer added",
        description: "New customer has been added successfully.",
      })
    }
    setIsModalOpen(false)
    setEditingCustomer(null)
  }

  const handleAddNew = () => {
    setEditingCustomer(null)
    setIsModalOpen(true)
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">{t("title")}</h1>
          <p className="text-muted-foreground">Manage your customer database and user accounts.</p>
        </div>
        <Button onClick={handleAddNew}>
          <Plus className="mr-2 h-4 w-4" />
          {t("addCustomer")}
        </Button>
      </div>

      <DataTable columns={columns} data={customers} onEdit={handleEdit} onDelete={handleDelete} />

      <CustomerModal
        isOpen={isModalOpen}
        onClose={() => {
          setIsModalOpen(false)
          setEditingCustomer(null)
        }}
        onSave={handleSave}
        customer={editingCustomer}
      />
    </div>
  )
}
