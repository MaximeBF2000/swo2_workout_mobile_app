import { useState } from 'react'
import { ApiClient } from '../features/apiClient'
import { useToggle } from './useToggle.hook'

const closeAfter =
  (fn, closeFn) =>
  (...args) => {
    fn(...args)
    closeFn()
  }

export const useEditSerie = ({ mutate }) => {
  const addSerie = async serie => {
    await ApiClient.addSerieToWorkoutAndExercice(serie)
    mutate()
  }

  const editSerie = async ({ id, note, reps, weight, spoted }) => {
    await ApiClient.updateSerie(id, {
      note,
      reps,
      weight,
      spoted
    })
    mutate()
  }

  const deleteSerie = async serieId => {
    await ApiClient.removeSerie(serieId)
    mutate()
  }

  const toggleSpoted = async (spoted, serieId) => {
    await ApiClient.updateSerie(serieId, { spoted: !spoted })
    mutate()
  }

  return {
    addSerie,
    editSerie,
    deleteSerie,
    toggleSpoted
  }
}

export const useSerieModals = () => {
  const [addSerieInfo, setAddSerieInfo] = useState(null)
  const [editingSerie, setEditingSerie] = useState(null)
  const [note, setNote] = useState(null)
  const [showGlobalAddSerie, toggleShowGlobalAddSerie] = useToggle()

  const closeGlobalModal = () => toggleShowGlobalAddSerie(false)
  const closeGlobalModalAfter = fn => closeAfter(fn, closeGlobalModal)

  const closeEditingModal = () => setEditingSerie(null)
  const closeEditingModalAfter = fn => closeAfter(fn, closeEditingModal)

  const closeAddModal = () => setAddSerieInfo(null)
  const closeAddModalAfter = fn => closeAfter(fn, closeAddModal)

  return {
    addSerieInfo,
    setAddSerieInfo,
    editingSerie,
    setEditingSerie,
    note,
    setNote,
    showGlobalAddSerie,
    toggleShowGlobalAddSerie,
    closeGlobalModalAfter,
    closeEditingModalAfter,
    closeAddModalAfter,
    closeGlobalModal,
    closeEditingModal,
    closeAddModal
  }
}
